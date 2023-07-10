import { DeleteButton } from "../EditShift";
import MainDialog from "../MainDialog";
import styled from "styled-components";

export default function DeleteEventDialogue({ onClose, message, deleteEvent }) {
  return (
    <MainDialog onClose={onClose}>
      {message.split("\n").map((line) => {
        return <p key={line}>{line} </p>;
      })}

      <DeleteButton
        onClick={() => {
          deleteEvent();
        }}
      >
        Delete
      </DeleteButton>
    </MainDialog>
  );
}
