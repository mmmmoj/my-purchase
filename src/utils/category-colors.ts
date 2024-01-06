const COLORS: any = {
  Food: '#c68a3b',
  Technology: '#b53e30',
  Footwear: '#beb410',
  Travel: '#19be10',
  Entertainment: '#109cbe',
  Automotive: '#103dbe',
  Apparel: '#9e10be',
};

export function categoryColor(category: string) {
  return COLORS[category] || '#3d3638';
}
