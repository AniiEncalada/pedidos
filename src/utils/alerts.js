import { toast } from "react-toastify";

const success = (message) => toast.success(` 🤗 ${message}`);
const warning = (message) => toast.error(` 😱 ${message}`);

export const alerts = { success, warning };
