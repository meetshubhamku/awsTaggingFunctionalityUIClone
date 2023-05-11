import React, { useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Input,
  Container,
  Select,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";

export default function TagManagementComponent() {
  const preDefinedTagesFromDatabase = ["Umpire", "Bowls", "Overs", "Runs"];

  const [tagsList, setTagsList] = useState([{ key: "", value: "" }]);

  const handleAddTagOnClick = () => {
    setTagsList([...tagsList, { key: "", value: "" }]);
  };
  const handleTagOnChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...tagsList];
    onchangeVal[i][name] = value;
    setTagsList(onchangeVal);
  };
  const handleTagDelete = (i) => {
    let deleteVal = [...tagsList];
    console.log("before delete - ", deleteVal);
    console.log("i - ", i);
    deleteVal.splice(i, 1);
    console.log("after delete - ", deleteVal);

    setTagsList(deleteVal);
  };

  const handleTagSave = () => {
    console.log(tagsList);
  };
  return (
    <Container maxW={"container.sm"}>
      {tagsList &&
        tagsList.map((val, i) => (
          <Grid templateColumns="repeat(3, 1fr)" gap={6} my={2}>
            <GridItem>
              <Select
                placeholder="Select option"
                onChange={(e) => handleTagOnChange(e, i)}
                name="key"
                value={val.key}
              >
                {preDefinedTagesFromDatabase.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem>
              <Input
                placeholder="Value"
                size="sm"
                name="value"
                value={val.value}
                onChange={(e) => handleTagOnChange(e, i)}
              />
            </GridItem>
            <GridItem>
              <Button
                variant={"outline"}
                onClick={() => handleTagDelete(i)}
                size="sm"
              >
                <RxCross2 />
              </Button>
            </GridItem>
          </Grid>
        ))}
      <Button onClick={handleAddTagOnClick} size="sm">
        Add New Tag
      </Button>

      <Button onClick={handleTagSave} size="sm" mx={10}>
        Save
      </Button>
    </Container>
  );
}
