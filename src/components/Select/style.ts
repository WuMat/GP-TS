export default {
  container: (provided: any) => ({
    ...provided,
    width: 450,
    height: 37
    // zIndex: 101
  }),
  control: (provided: any) => ({
    ...provided,
    border: "1px solid grey",
    opacity: 0.7,
    borderRadius: 0,
    boxShadow: "none",
    "&:hover": {
      cursor: "pointer",
      border: "1px solid grey",
      opacity: 0.7
    }
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#c34528",
    "&:hover": {
      color: "#c34528"
    }
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "gray",
    opacity: 0.3
  })
};
