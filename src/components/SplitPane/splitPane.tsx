import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  ReactElement,
  Children,
  ReactNode,
  Fragment,
} from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import {
  useSplitPaneContext,
  SplitPaneProvider,
} from "context/SplitPaneContext";

type SplitPaneProps = {
  orientation?: "horizontal" | "vertical";
  children: ReactElement<PanelProps>[]; // Array of blocks to display
  minBlockSize?: number; // Minimum width for each block
};

type PanelProps = {
  children: ReactNode;
};

export type SplitPaneRef = {
  resetLayout: () => void; // Example method to reset layout widths
};

const layoutStyles = tv({
  slots: {
    container: "flex w-full h-full",
    childBlock: "overflow-hidden",
    splitter: "cursor-col-resize bg-transparent",
  },
  variants: {
    isDragging: {
      true: {
        splitter: "before:bg-blue-500",
      },
      false: {
        splitter: "before:bg-gray-400",
      },
    },
    orientation: {
      horizontal: {
        splitter:
          "cursor-col-resize h-full w-[5px] relative before:box-border before:content-[''] before:w-px before:h-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
        container: "flex-row",
      },
      vertical: {
        splitter:
          "cursor-row-resize w-full h-[5px] relative before:box-border before:content-[''] before:h-px before:w-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
        container: "flex-col",
      },
    },
  },
});

const SplitPane = forwardRef<SplitPaneRef, SplitPaneProps>(
  ({ orientation = "horizontal", minBlockSize = 0, children }, ref) => {
    // Reference to the container element
    const containerRef = useRef<HTMLDivElement | null>(null);
    // State to store the sizes of each block
    const [sizes, setSizes] = useState<number[]>(
      Array(children.length).fill(100 / children.length),
    );
    // State to track whether the user is dragging the splitter
    const [isDragging, setIsDragging] = useState(false);
    // State to track the index of the block being dragged
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
    // State to track the starting position of the mouse
    const [startXY, setStartXY] = useState<number | null>(null);

    // Destructure the slots from the layoutStyles
    const { container, childBlock, splitter } = layoutStyles({
      isDragging,
      orientation,
    });

    useImperativeHandle(ref, () => ({
      resetLayout: () =>
        setSizes(Array(children.length).fill(1 / children.length)),
    }));

    const handleMouseDown = (
      index: number,
      clientX: number,
      clientY: number,
    ) => {
      setIsDragging(true);
      setDraggingIndex(index);
      orientation === "horizontal" && setStartXY(clientX);
      orientation === "vertical" && setStartXY(clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isDragging ||
        draggingIndex === null ||
        !containerRef.current ||
        startXY === null
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const totalWidth = containerRect.width;
      const totalHeight = containerRect.height;
      if (orientation === "horizontal") {
        // Calculate the change in mouse position
        const deltaX = e.clientX - startXY;

        // Convert deltaX to proportional width
        const deltaWidth = (deltaX / totalWidth) * 100;

        const newWidths = [...sizes];
        const leftBlockWidth = newWidths[draggingIndex] + deltaWidth;
        const rightBlockWidth = newWidths[draggingIndex + 1] - deltaWidth;

        // Ensure blocks respect the minimum width constraint
        if (
          leftBlockWidth >= (minBlockSize / totalWidth) * 100 &&
          rightBlockWidth >= (minBlockSize / totalWidth) * 100
        ) {
          console.log(leftBlockWidth, rightBlockWidth);
          newWidths[draggingIndex] = leftBlockWidth;
          newWidths[draggingIndex + 1] = rightBlockWidth;
          setSizes(newWidths);
          setStartXY(e.clientX); // Update startX for the next movement
        }
      }
      if (orientation === "vertical") {
        // Calculate the change in mouse position
        const deltaY = e.clientY - startXY;

        // Convert deltaX to proportional width
        const deltaHeight = (deltaY / totalHeight) * 100;

        const newHeights = [...sizes];
        const topBlockHeight = newHeights[draggingIndex] + deltaHeight;
        const bottomBlockHeight = newHeights[draggingIndex + 1] - deltaHeight;

        // Ensure blocks respect the minimum Height constraint
        if (
          topBlockHeight >= (minBlockSize / totalHeight) * 100 &&
          bottomBlockHeight >= (minBlockSize / totalHeight) * 100
        ) {
          console.log(topBlockHeight, bottomBlockHeight);
          newHeights[draggingIndex] = topBlockHeight;
          newHeights[draggingIndex + 1] = bottomBlockHeight;
          setSizes(newHeights);
          setStartXY(e.clientY); // Update startX for the next movement
        }
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      setDraggingIndex(null);
      setStartXY(null);
    };

    React.useEffect(() => {
      if (isDragging) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging]);

    return (
      <SplitPaneProvider value={true}>
        <div ref={containerRef} className={twMerge(container())}>
          {Children.map(children, (child, index) => (
            <Fragment key={index}>
              <div
                className={twMerge(childBlock())}
                style={{
                  flex: `${sizes[index]}%`,
                }}
              >
                {child}
              </div>
              {index < children.length - 1 && (
                <div
                  className={twMerge(splitter())}
                  role="separator"
                  id="splitter"
                  onMouseDown={(e) =>
                    handleMouseDown(index, e.clientX, e.clientY)
                  }
                />
              )}
            </Fragment>
          ))}
        </div>
      </SplitPaneProvider>
    );
  },
);

SplitPane.displayName = "SplitPane";

const Panel = forwardRef<HTMLDivElement, PanelProps>(({ children }, ref) => {
  useSplitPaneContext();
  return (
    <div className="h-full w-full" ref={ref}>
      {children}
    </div>
  );
});

Panel.displayName = "Panel";

const ExportedSplitPane = Object.assign(SplitPane, {
  Panel,
});

export default ExportedSplitPane;
