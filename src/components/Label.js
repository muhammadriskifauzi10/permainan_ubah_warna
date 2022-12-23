function Label({value}) {
   return (
      <div className="label">
         <div className="wrapper" style={{ background: value }}>
         </div>
      </div>
   );
}

export default Label;