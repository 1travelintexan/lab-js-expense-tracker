describe("Bonuses", () => {
  describe("getTotal Iteration", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotal).toBeDefined();
    });
    it("should take one argument", () => {
      const budget = new Budget();
      expect(budget.getTotal.length).toBe(1);
    });
    it("should return the expense total with 'expense' as argument", () => {
      const budget = new Budget();
      const expense1 = new Expense("today", 100, "test", false);
      budget.addEntry(expense1);
      const expense2 = new Expense("today", 200, "test", false);
      budget.addEntry(expense2);
      const expense3 = new Expense("today", 300, "test", false);
      budget.addEntry(expense3);
      expect(budget.getTotal("expense")).toBe(600);
    });
    it("should return the expense total with 'income' as argument", () => {
      const budget = new Budget();
      const expense1 = new Income("today", 100, "test", false);
      budget.addEntry(expense1);
      const expense2 = new Income("today", 100, "test", false);
      budget.addEntry(expense2);
      const expense3 = new Income("today", 150, "test", false);
      budget.addEntry(expense3);
      console.log(budget, budget.entries);
      expect(budget.getTotal("income")).toBe(350);
    });
  });
  describe("getTotal Iteration", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries).toBeDefined();
    });
    it("should return string in the correct format for incomes", () => {
      const budget = new Budget();
      const expense1 = new Income("today", 100, "test", false);
      budget.addEntry(expense1);
      const expense2 = new Income("today", 200, "test2", false);
      budget.addEntry(expense2);
      const expense3 = new Income("today", 300, "test3", false);
      budget.addEntry(expense3);
      console.log(budget.getFormattedEntries());
      expect(budget.getFormattedEntries()).toEqual([
        "today | test | +100€",
        "today | test2 | +200€",
        "today | test3 | +300€",
      ]);
    });
    it("should return string in the correct format for expenses", () => {
      const budget = new Budget();
      const expense1 = new Expense("today", 100, "test", false);
      budget.addEntry(expense1);
      const expense2 = new Expense("today", 200, "test2", false);
      budget.addEntry(expense2);
      const expense3 = new Expense("today", 300, "test3", false);
      budget.addEntry(expense3);
      console.log(budget.getFormattedEntries());
      expect(budget.getFormattedEntries()).toEqual([
        "today | test | -100€",
        "today | test2 | -200€",
        "today | test3 | -300€",
      ]);
    });
  });
});
