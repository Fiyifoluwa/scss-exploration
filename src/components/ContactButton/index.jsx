import React, { useContext } from 'react';
import MenuContext from '../Menu/MenuManager';
import { Plus } from 'react-feather';
import cn from 'classnames';

import './style.scss';

export default function ContactButton() {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <button className={cn('contact-button', { open })} onClick={() => setOpen(!open)}>
      <span>Contact Us</span>
      <Plus />
    </button>
  );
}
