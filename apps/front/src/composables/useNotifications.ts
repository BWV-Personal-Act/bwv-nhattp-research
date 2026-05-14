import { useToast } from 'primevue/usetoast';

export function useNotifications() {
  const toast = useToast();

  const notify = (message: string, type: 'success' | 'error' | 'info' | 'warn' = 'success') => {
    toast.add({
      severity: type,
      summary: type.charAt(0).toUpperCase() + type.slice(1),
      detail: message,
      life: 3000,
    });
  };

  const notifySuccess = (msg: string) => notify(msg, 'success');
  const notifyError = (msg: string) => notify(msg, 'error');

  return { notify, notifySuccess, notifyError };
}
