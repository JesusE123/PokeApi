import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { modalPokemonProps } from "./ModalPokemon.interface";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalPokemon({ 
  isOpen, name, height, weight, experience 
}:modalPokemonProps) {
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="bg-black text-white p-5">
          <DialogTitle>Information of pokemon</DialogTitle>
          <DialogContent>{name}- {height} - {weight}- {experience}</DialogContent>
          <DialogActions></DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
