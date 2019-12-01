import React, { useState } from "react";
import Block from './block';

function Quote() {
  return (
    <Block title={false}>
      <div>“I will take the lead by investing in the first all-digital government, and reverse engineer every transaction from the taxpayer’s shoes. The entry point to Connecticut will be through its digital front door, a one-stop-shop for everything current and prospective citizens need from their government. We will be online, not in line. It won’t be done overnight, but let’s start today.”</div>
      <div>
        Governor Lamont, <em>State of the State Address</em>
      </div>
    </Block>
  );
}

export default Quote;
