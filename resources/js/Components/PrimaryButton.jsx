export default function PrimaryButton({
    text,
    processing
}) {
    return (
        <button disabled={processing} className="self-end px-3 text-white py-2 bg-zinc-600 rounded-md w-[10rem]">{text}</button>
    );
}