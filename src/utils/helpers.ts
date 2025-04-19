import swal from 'sweetalert';

const showSwal = (title: string, icon: string | null, text: string) => {
  swal({
    title,
    icon: icon === null ? undefined : icon,
    buttons: {
      confirm: {
        text,
        value: true,
      },
    },
  });
};

export { showSwal };