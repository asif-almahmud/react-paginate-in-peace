# react-paginate-in-peace

A simple react pagination component.

## Installation

    npm install react-paginate-in-peace

or

    yarn add react-paginate-in-peace

## Usage

```
import React, { useState } from "react";
import Table from "./Table";
import Paginate from "react-paginate-in-peace";
import data from "./MOCK_DATA.json";

const Data = data;
const noOfRows = Data.length;

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const totalPages = noOfRows / rowsPerPage;

  const dataContentPerPage = Data.filter(
    (data) =>
      data.id <= currentPage * rowsPerPage &&
      data.id > (currentPage - 1) * rowsPerPage
  );


  return (
    <div>

        // I have created the table component below to reduce markup

        <Table
          tableData={dataContentPerPage}
          thNames={["Name", "Email", "Gender", "Phone"]}
          tdProperties={["first_name", "email", "gender", "phone"]}
          thStyle={{
            textAlign: "center",
            border: "1px solid #ddd",
            backgroundColor: "#E5EAF0",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
          tdStyle={{
            textAlign: "center",
            border: "1px solid #ddd",
            backgroundColor: "#edf0f4",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        />


      {/* Now we are going to use our imported paginating component. */}

        <Paginate
          totalPages={totalPages} // Required Property
          setCurrentPage={setCurrentPage} // Required Property
          activeDigitColor={"white"} // Optional Property
          activeBackgroundColor={"#21385b"} // Optional Property
          buttonBorderColor={""} // Optional Property
          arrowColor={"#21385b"} // Optional Property
          dotColor={"blue"} // Optional Property
        />


    </div>
  );
};

export default DataTable;
```

## Props

Required props: totalPages, setCurrentPage .

Optional props: activeDigitColor, activeBackgroundColor, buttonBorderColor, arrowColor, dotColor .

| Name                  | Type     | Details                                                                                                                                        |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| totalPages            | number   | Provide the variable that gives total number of pages (This prop is required )                                                                 |
| setCurrentPage        | function | Procide your state setting function for the current or active page. (Required prop)                                                            |
| activeDigitColor      | string   | Takes a color name as string. It defines the active digit color and the background color of the inactive buttons (Optional prop)               |
| activeBackgroundColor | string   | Takes a color name as string. It defines the background color of the active digit and the digit color of the inactive buttons. (Optional prop) |
| buttonBorderColor     | string   | Takes a color name as string. It defines the border color of the digit buttons. (Optional prop)                                                |
| arrowColor            | string   | Takes a color name as string. It defines the navigating arrows color.(Optional prop)                                                           |
| dotColor              | string   | Takes a color name as string. It defines the color of the dots.(Optional prop)                                                                 |
