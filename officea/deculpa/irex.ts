// Define an interface to describe the shape of the riyadIncome2 object
interface IncomeRecord {
  [key: string]: number | undefined;
}

// Assuming riyadIncome2 is an object following the IncomeRecord interface
const riyadIncome2: IncomeRecord = {
  // ... other properties with string keys and number values
};

// Safely accessing the property and logging it
// The output will be 'undefined' if the property does not exist
console.log(riyadIncome2["hello"]);
