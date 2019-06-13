function returnsDifferent(arg) {
  if (arg === "Harry") {
    return 7;
  }

  if (arg === "Ron") {
    return undefined;
  }

  if (arg === "Hermione") {
    return {};
  }

  return "Wizards";
}
