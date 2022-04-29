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

export const showConfirm = (msg, action) =>
	Swal.fire({
		icon: 'warning',
		title: 'Are you sure?',
		text: msg || 'You want to proceed?',
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonText: 'Yes',
		confirmButtonColor: '#2e9adb',
		cancelButtonColor: '#e11c32',
		cancelButtonText: 'No',
		reverseButtons: true,
		preConfirm: () => action()
	});

export const showInfo = () =>
	Toast.fire({
		icon: 'info',
		title: 'Some update'
	});

export const showLoading = () =>
	Swal.fire({
		title: 'Loading',
		html: 'please wait...',
		allowOutsideClick: false,
		showCancelButton: false,
		showConfirmButton: false,
		showDenyButton: false,
		didOpen: () => Swal.showLoading()
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
