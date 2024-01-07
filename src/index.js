// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }
  addEntry(newEntry) {
    this.entries.push(newEntry);
  }
  getTotalIncome() {
    let total = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        total += entry.amount;
      }
    });
    return total;
  }
  getTotalExpense() {
    let total = 0;
    this.entries.forEach((entry) => {
      if (entry.type === "expense") {
        total += entry.amount;
      }
    });
    return total;
  }
  getCurrentBalance() {
    let totalIncome = this.getTotalIncome();
    let totalExpenses = this.getTotalExpense();
    return totalIncome - totalExpenses;
  }
  getTotal(type) {
    let total = 0;
    this.entries.forEach((entry) => {
      if (entry.type === type) {
        total += entry.amount;
      }
    });
    return total;
  }
  getFormattedEntries() {
    let arr = [];
    this.entries.forEach((e) => {
      if (e.type === "expense") {
        arr.push(`${e.date} | ${e.description} | -${e.amount}€`);
      } else {
        arr.push(`${e.date} | ${e.description} | +${e.amount}€`);
      }
    });
    return arr;
  }
}
