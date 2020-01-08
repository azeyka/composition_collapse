import React, { useState } from "react";
import Collapse from "./Collapse";
import Paragraph from "./Paragraph";

export default function Main() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedChange = event => {
    event.preventDefault();
    setIsExpanded(prevState => !prevState);
  };

  return (
    <Collapse
      collapsedLabel="Подробнее"
      expandedLabel="Скрыть"
      isExpanded={isExpanded}
      onExpandedChange={handleExpandedChange}
    >
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo
        cumque, harum hic, ducimus vitae repellendus placeat mollitia possimus
        deleniti quos reprehenderit! Praesentium, impedit quisquam expedita
        exercitationem deserunt molestias voluptatem!
      </Paragraph>
    </Collapse>
  );
}
