export default function CommandLine() {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <input onChange={handleOnChange} />
    </form>
  );
}
