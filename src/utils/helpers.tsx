export const formatDate = (date: string): string => {
	return new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});
};

export const calculateReadTime = (content: string): number => {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
};
