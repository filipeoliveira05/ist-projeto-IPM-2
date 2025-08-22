// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id,groupX,groupY)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.groupX = groupX; // X position for the group label
    this.groupY = groupY; // Y position for the group label

  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw() {let colors =  [
  '#FF0000', // Red
  '#FF1A33', // Deep Red
  '#FF3355', // Red-Pink
  '#FF4D7F', // Pink-Red
  '#FF66A1', // Light Red-Pink
  '#FF80C4', // Soft Pink
  '#FF99E6', // Pale Pink
  '#FFB2FF', // Light Magenta
  '#FF66FF', // Magenta
  '#E600FF', // Purple-Pink
  '#D100FF', // Vivid Purple
  '#C200FF', // Bright Purple
  '#B300FF', // Strong Purple
  '#A400FF', // Purple
  '#9A00FF', // Dark Purple
  '#8F00FF', // Darker Purple
  '#7F00FF', // Deep Purple
  '#6F00FF', // Very Deep Purple
  '#5F00FF', // Ultra Violet
  '#4F00FF', // Violet
  '#3F00FF', // Strong Violet
  '#2F00FF', // Very Dark Violet
  '#1F00FF', // Deep Violet
  '#0F00FF', // Dark Purple
  '#0A00E6', // Very Dark Purple
  '#0A00CC', // Deep Purple
];




  let firstLetter = this.label.charAt(0).toLowerCase();
  let baseColor = colors[firstLetter.charCodeAt(0) - 97];

  // Determine if the label is light or dark
  let r = parseInt(baseColor.substring(1, 3), 16);
  let g = parseInt(baseColor.substring(3, 5), 16);
  let b = parseInt(baseColor.substring(5, 7), 16);
  let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Luminance formula

  // Adjust target color for better contrast
  let targetColor = luminance > 128 ? this.darkenColor(baseColor) : this.lightenColor(baseColor);

  fill(targetColor);

// Draw the rounded square
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.width, this.width * 0.2);

    // Draw the label (word wrapping)
    textFont("Arial", this.width * 0.20);
    textAlign(CENTER, CENTER);
    fill(255);

    let maxWidth = this.width * 0.8;
    let wrappedText = this.wrapText(this.label, maxWidth);

    let lineHeight = this.width * 0.22;
    let startY = this.y - (wrappedText.length - 1) * lineHeight / 2;

    for (let i = 0; i < wrappedText.length; i++) {
      text(wrappedText[i], this.x, startY + i * lineHeight);
    }

    push()
    // Draw group label
    textFont("Arial", this.width * 0.30);
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text(firstLetter.toUpperCase(), this.groupX-(0.25*PPCM), this.groupY-(0.25*PPCM));
    pop()
  }
  // Word wrapping function
  wrapText(txt, maxWidth) {
    let words = txt.split(" ");
    let lines = [];
    let currentLine = "";

    for (let word of words) {
      let testLine = currentLine.length === 0 ? word : currentLine + " " + word;
      if (textWidth(testLine) < maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    return lines;
  }

// Function to darken the color
darkenColor(color) {
  let r = Math.max(0, parseInt(color.substring(1, 3), 16) - 50);
  let g = Math.max(0, parseInt(color.substring(3, 5), 16) - 50);
  let b = Math.max(0, parseInt(color.substring(5, 7), 16) - 50);
  return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}

// Function to lighten the color
 lightenColor(color) {
  let r = Math.min(255, parseInt(color.substring(1, 3), 16) + 50);
  let g = Math.min(255, parseInt(color.substring(3, 5), 16) + 50);
  let b = Math.min(255, parseInt(color.substring(5, 7), 16) + 50);
  return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}}