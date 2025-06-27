import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Lightbox1 = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "https://placehold.co/600x400" },
          { src: "https://placehold.co/600x400" },
          { src: "https://placehold.co/600x400" },
        ]}
      />
    </>
  );
}

export default Lightbox1;