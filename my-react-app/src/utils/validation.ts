const validateTitle = (title: string): string | undefined => {
  if (!title) {
    return 'Title is required';
  }
};

const validateAuthor = (author: string): string | undefined => {
  if (!author) {
    return 'Author is required';
  } else if (author.charAt(0) !== author.charAt(0).toUpperCase()) {
    return 'Author should start with a capital letter';
  }
};

const validateAddedAt = (addedAt: string): string | undefined => {
  const date = new Date(addedAt);
  const today = new Date();
  if (!addedAt) {
    return 'Added At is required';
  } else if (date > today) {
    return 'Added At should not be later than today';
  }
};

const validateArtwork = (artwork: FileList): string | undefined => {
  if (!artwork.length) {
    return 'Artwork is required';
  } else if (!/^image/.test(artwork[0].type)) {
    return 'Only image files are allowed';
  }
};

const checkValid = { validateTitle, validateArtwork, validateAddedAt, validateAuthor };

export default checkValid;
