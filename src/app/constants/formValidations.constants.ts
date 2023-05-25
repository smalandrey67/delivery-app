const emailPattern =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const formValidations = {
	name: {
		required: "Field is required",
		minLength: { value: 3, message: "Min 3 symbols" },
		maxLength: { value: 15, message: "Max 15 symbols" }
	},
	email: {
		required: "Field is required",
		pattern: { value: emailPattern, message: "Not valid email" }
	},
	phone: {
		required: "Field is required",
		pattern: { value: phonePattern, message: "Not valid phone number" }
	},
	address: {
		required: "Field is required"
	}
};
