export const useGetErrorMessage = (error: unknown) => {
    let errorMessage = 'An unexpected runtime error occurred.';

    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (
        typeof error === 'object' &&
        error !== null &&
        'statusText' in error
    ) {
        errorMessage = (error as { statusText: string }).statusText;
    }

    return { errorMessage };
};
