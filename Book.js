import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemText } from '@mui/material'
import { Divider } from '@mui/material'
import React from 'react'

function Book() {
  return (
    <div>
        <List>
  <ListItem button divider>
    <ListItemText primary="Bhagavad gita"
     secondary="The best known and the most influential of the hindu scriptures" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="The Quran" 
    secondary="The final revelation from the creator of this universe" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Thirukural" secondary="The book whose couplets makes a deep sense "/>
  </ListItem>
  <ListItem button divider>
    <ListItemText primary="War and Peace" 
    secondary=""it is one of the humanities greatest treasure/>
  </ListItem>
  <Divider light />
  <ListItem button divider>
    <ListItemText primary="The Bible" secondary="Holy scripture of christianity"/>
  </ListItem>
</List>
    </div>
  )
}

export default Book