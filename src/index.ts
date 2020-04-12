import readline from 'readline';
import { mapperNumeral } from "./Mapper/mapper";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveAsyncReadLine = () => {
  rl.question('What do you want? ', (answer: string) => {
    if (answer == 'exit')
      return rl.close();
    const mapper = new mapperNumeral(answer);
    console.log(`${mapper.convert().message}\n`)
    recursiveAsyncReadLine()
  })
};
recursiveAsyncReadLine();