import inquirer from "inquirer";
import { BankAccount } from "./bankAccount.js";
import { menu } from "./index.js";

type CreateAccount = { name: string; initialDeposit: number };

export const createAccount = async (): Promise<void> => {
  const { name, initialDeposit }: CreateAccount = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name:",
    },
    {
      type: "number",
      name: "initialDeposit",
      message: "Enter initial deposit amount:",
    },
  ]);

  const account = new BankAccount(name, initialDeposit);
  console.log(
    `Account created successfully for ${name} with initial deposit of ${initialDeposit}`
  );
  console.log(account);
  menu(account);
};
