export function isVehicleItem(item) {
    const nonVehicleKeywords = [
      "gloves",
      "helmet",
      "sajal gorain",
      "test",
      "jacket",
      "sports jacket",
      "mm"
    ];
  
    if (!item?.name) return false;
  
    const lowerCaseName = item.name.toLowerCase();
    return !nonVehicleKeywords.some(keyword => lowerCaseName.includes(keyword));
  }
  