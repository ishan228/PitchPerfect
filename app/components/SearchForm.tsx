import React from "react";
import Form from "next/form";

const SearchForm = () => {
    const query= "test"

const reset=()=>{
}
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        
        placeholder="Search Startup"
      />
     <div className="flex gap-2">
        {query && (
            <button type="reset" onClick={reset}></button>
        ) }
     </div>


    </Form>
  );
};

export default SearchForm;
