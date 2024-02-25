export default function SubmitButton({ isDisabled, isLoading }: { isDisabled: boolean, isLoading: boolean }) {
    return (
        <button className={isDisabled ? 'disabled-button' : 'button'} type="submit" disabled={isDisabled}>
            {isLoading ? 'Loading...' : 'Submit'}
        </button>
    );
}