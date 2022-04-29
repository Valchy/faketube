import Swal from 'sweetalert2';

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-end',
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true
});

export const showSuccess = msg =>
	Toast.fire({
		icon: 'success',
		title: msg || 'You did it!'
	});

export const showError = msg =>
	Toast.fire({
		icon: 'error',
		title: msg || 'Something went wrong :/'
	});

export const promptName = setName =>
	Swal.fire({
		icon: 'info',
		title: 'Hey there...',
		text: 'What is your name?',
		input: 'text',
		inputPlaceholder: 'Slim Shady',
		confirmButtonText: "Let's goooo",
		reverseButtons: true,
		showCancelButton: true,
		confirmButtonColor: '#2e9adb',
		cancelButtonText: 'Cancel',
		preConfirm: name => setName(name)
	}).then(({ isConfirmed }) => {
		if (!isConfirmed) setName('Anonymous');
	});
