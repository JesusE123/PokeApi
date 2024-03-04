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
  isOpen, name ,img, setIsOpen
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
          <DialogTitle sx={{fontSize: 40}}>Information of pokemon</DialogTitle>
          <DialogTitle sx={{fontSize:35, textTransform:"uppercase"}} className="text-center">{name}</DialogTitle>
          <DialogContent className="flex justify-center">
            <img src={img} alt="pokemon" width={200}  />
          </DialogContent>
          <div className="flex">
          <DialogContent sx={{fontSize:40}}>Movements : </DialogContent>
          <DialogContent sx={{fontSize:25}}>
           
          </DialogContent>
          </div>
          <DialogActions>
           <button onClick={() => setIsOpen(!isOpen)} type="submit">Close</button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
