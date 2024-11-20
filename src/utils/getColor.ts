type ColorInfo = {
  extractedRGB: string;
  extractedRGBA: string;
  rgbaColor: string;
  rgbaColor50: string;
  extractedAlpha: number;
};

export function getColor(color: string): ColorInfo | undefined {
  // Regular expression patterns for each color format
  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
  const hexAlphaPattern = /^#([0-9A-Fa-f]{8})$/;
  const rgbPattern = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  const rgbaPattern =
    /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1]?(?:\.\d+)?)\)$/;
  const hslPattern = /^hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)$/;
  const hslaPattern =
    /^hsla\((\d{1,3}), (\d{1,3})%, (\d{1,3})%, ([0-1]?(?:\.\d+)?)\)$/;

  let rgbaColor: string;

  // Convert Hex to RGBA
  function hexToRgba(hex: string): string {
    let r = 0,
      g = 0,
      b = 0,
      a = 1;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    } else if (hex.length === 9) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
      a = parseInt(hex[7] + hex[8], 16) / 255;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  // Convert HSL to RGB
  function hslToRgb(h: number, s: number, l: number, a: number): string {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  // Check and parse the color format
  if (hexAlphaPattern.test(color)) {
    rgbaColor = hexToRgba(color);
  } else if (hexPattern.test(color)) {
    rgbaColor = hexToRgba(color);
  } else if (rgbaPattern.test(color)) {
    rgbaColor = color; // Already in rgba
  } else if (rgbPattern.test(color)) {
    rgbaColor = color.replace("rgb", "rgba").replace(")", ", 1)");
  } else if (hslaPattern.test(color)) {
    const match = color.match(hslaPattern);
    if (match) {
      const h = parseInt(match[1]);
      const s = parseInt(match[2]);
      const l = parseInt(match[3]);
      const a = parseFloat(match[4]);
      console.log(h, s, l, a);
      rgbaColor = hslToRgb(h, s, l, a);
    } else {
      return undefined;
    }
  } else if (hslPattern.test(color)) {
    const match = color.match(hslPattern);
    if (match) {
      const h = parseInt(match[1]);
      const s = parseInt(match[2]);
      const l = parseInt(match[3]);
      rgbaColor = hslToRgb(h, s, l, 1);
    } else {
      return undefined;
    }
  } else {
    return undefined; // Invalid color format
  }

  // Remove alpha and return the object with color and 50% opacity version
  const rgbaValues = rgbaColor.match(/\d+(?:\.\d+)?/g);

  if (!rgbaValues) {
    return undefined;
  }
  const rgbColor = `${rgbaValues[0]},${rgbaValues[1]},${rgbaValues[2]}`;
  const rgbColorWithAlpha = `${rgbaValues[0]},${rgbaValues[1]},${rgbaValues[2]},${rgbaValues[3]}`;

  return {
    extractedRGB: rgbColor,
    extractedRGBA: rgbColorWithAlpha,
    extractedAlpha: parseFloat(rgbaValues[3]) || 1,
    rgbaColor,
    rgbaColor50: rgbaColor.replace(
      /,\s?([01](?:\.\d+)?)/,
      (_, opacity) => `, ${Math.min(1, Number(opacity) * 0.1)}`,
    ),
  };
}
// Example usage
// console.log(getColor("#ff5733")); // hex
// console.log(getColor("#ff5733ff")); // hexalpha
// console.log(getColor("rgb(255, 87, 51)")); // rgb
// console.log(getColor("rgba(255, 87, 51, 0.5)")); // rgba
// console.log(getColor("hsl(9, 100%, 60%)")); // hsl
// console.log(getColor("hsla(9, 100%, 60%, 0.5)")); // hsla
