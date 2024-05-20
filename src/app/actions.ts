'use server'

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { format } from "date-fns";

export const setMessage = (params: any) => {
  try {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd-MM-yyyy HH:mm:ss');
    const new_params = {
      name: params.name,
      email: params.email,
      topic: params.topic,
      date: formattedDate,
      message: params.message
    }

    const filePath = path.join(process.cwd(), 'public', 'contact_me.yaml');
    const fileContents = fs.readFileSync(filePath);
    const data: any = yaml.load(fileContents.toString());
    data.messages.unshift(new_params)
    const newYAML = yaml.dump(data);
    fs.writeFileSync(filePath, newYAML, 'utf8');
    return { success: true, message: 'Success.' }
  } catch (error: any) {
    return { success: false, message: error.message }
  }
}