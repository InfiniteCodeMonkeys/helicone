/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */

import { ModelRow } from "../../interfaces/Cost";

export const costs: ModelRow[] = [
  {
    model: {
      operator: "includes",
      value: "gemini-pro",
    },
    cost: {
      prompt_token: 0.000000125,
      completion_token: 0.000000375,
    },
  },
  {
    model: {
      operator: "equals",
      value: "gemini-1.0-pro-vision-001",
    },
    cost: {
      prompt_token: 0.000000125,
      completion_token: 0.000000375,
    },
  },
  {
    model: {
      operator: "equals",
      value: "gemini-1.0-pro",
    },
    cost: {
      prompt_token: 0.000000125,
      completion_token: 0.000000375,
    },
  },
  {
    model: {
      operator: "includes",
      value: "gemini-1.5-flash",
    },
    cost: {
      prompt_token: 0.00000035,
      completion_token: 0.00000105,
    },
  },
  {
    model: {
      operator: "includes",
      value: "gemini-1.5-pro",
    },
    cost: {
      prompt_token: 0.0000035,
      completion_token: 0.0000105,
    },
  },
];
