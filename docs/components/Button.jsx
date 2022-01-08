function Button(props) {
  return (
    <>
      <button className="font-open font-bold text-btn bg-yellow-100 py-3 px-7 rounded-full mt-6">
        {props.label}
      </button>
    </>
  );
}

export default Button;
