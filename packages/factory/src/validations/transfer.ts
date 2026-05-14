import * as yup from 'yup';

export const baseTransferSchema = yup.object({
  toUserId: yup
    .number()
    .required('Please select a recipient')
    .positive('Invalid recipient ID')
    .notOneOf([yup.ref('fromUserId')], 'Recipient cannot be the same as sender'),
  amount: yup
    .number()
    .required('Please enter an amount')
    .positive('Amount must be a positive number'),
});

export type TransferData = yup.InferType<typeof baseTransferSchema>;

export const transferBalanceSchema = yup.object({
  body: baseTransferSchema,
});
