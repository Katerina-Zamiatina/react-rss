import { FormState, Errors } from "types/types";

const validateFields = (formData: FormState, errors: Errors) => {
  const date = new Date(formData.addedAt);
    const today = new Date();

    if (date > today) {
      errors['addedAt'] = 'Date cannot be in the future';
      return;
    }

    if (!formData.artwork) {
      errors['artwork'] = 'Image is required';
      return;
    }

    if (!formData.title.trim()) {
      errors['title'] = 'Title is required';
      return;
    }

    if (!formData.type) {
      errors['type'] = 'Type is required';
      return;
    }

    if (!formData.agreement) {
      errors['agreement'] = 'Agreement is required';
      return;
    }

    if (!formData.owner) {
      errors['owner'] = 'Owner is required';
      return;
    }

    const validAuthor = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ\s.'-]+$/u;
    if (!formData.author.trim()) {
      errors['author'] = 'Author is required';
      return;
    } else if (!validAuthor.test(formData.author)) {
      errors['author'] = 'Author name must start with a capital letter';
      return;
    }
}


const validate = (
  id: keyof FormState,
  value: string,
  errors: FieldErrors<FieldValues>
): FieldErrors<FieldValues> => {
  if (id === 'addedAt') {
    const date = new Date(value);
    const today = new Date();

    if (date > today) {
      return {
        ...errors,
        [id]: { message: 'Date cannot be in the future' },
      };
    }
  }

  if (id === 'artwork' && !value) {
    return {
      ...errors,
      [id]: { message: 'Image is required' },
    };
  }

  if (id === 'title' && !value.trim()) {
    return {
      ...errors,
      [id]: { message: 'Title is required' },
    };
  }

  if (id === 'type' && !value) {
    return {
      ...errors,
      [id]: { message: 'Type is required' },
    };
  }

  if (id === 'agreement' && !value) {
    return {
      ...errors,
      [id]: { message: 'Agreement is required' },
    };
  }

  if (id === 'owner' && !value) {
    return {
      ...errors,
      [id]: { message: 'Owner is required' },
    };
  }

  const validAuthor = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ\s.'-]+$/u;
  if (id === 'author' && !value.trim()) {
    return {
      ...errors,
      [id]: { message: 'Author is required' },
    };
  } else if (id === 'author' && !validAuthor.test(value)) {
    return {
      ...errors,
      [id]: { message: 'Author name must start with a capital letter' },
    };
  }

  return errors;
};

export default validateFields