import * as React from "react";

import Dialog from "@mui/material/Dialog";

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
  value, name ,img, abilities
}:modalPokemonProps) {
  
  return (
    <React.Fragment>
      <Dialog
        open={value}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="bg-black text-white p-5">
          <DialogTitle sx={{fontSize: 40, textAlign:"center"}}>Information of pokemon</DialogTitle>
          <DialogTitle sx={{fontSize:35, textTransform:"uppercase"}} className="text-center">{name}</DialogTitle>
          <DialogContent className="flex justify-center">
            <img src={img} alt="pokemon" width={200}  />
          </DialogContent>
          <div className="flex">
          <DialogContent sx={{fontSize:40}}>Movements :  </DialogContent>
          <DialogContent sx={{fontSize:25}}>
          {abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
          </DialogContent>
          </div>
          
        </div>
      </Dialog>
    </React.Fragment>
  );
}
