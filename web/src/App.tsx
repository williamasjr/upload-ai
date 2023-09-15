import { Button } from "./components/ui/button";
import { Github, Wand2 } from 'lucide-react'
import { Separator } from './components/ui/separator';
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";

export function App() {  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex  items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed at Rocketseat's NLWD
          </span>

            <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>

        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              placeholder="Inclua o prompt para a IA..."
              className="resize-none p-5 leading-relaxed"
            />
            <Textarea 
              placeholder="Resultado gerado pela IA..." 
              readOnly
              className="resize-none p-5 leading-relaxed"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode usar a <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transição do vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">

          <VideoInputForm/>

         <Separator />

         <form className="space-y-6">

         <div className="space-y-2">
            <label>Prompt</label>
            <PromptSelect />
          </div>

          <div className="space-y-2">
            <label>Modelo</label>
            <Select disabled defaultValue="gpt3.5">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
              </SelectContent>
            </Select>
            <span className="block text-xs text-muted-foreground italic">
              Você poderá customizar essa opção em breve
            </span>
          </div>


          <Separator />

          <div className="space-y-4">
            <label>Temperatura</label>
            <Slider
              min={0}
              max={1}
              step={0.1}
            />

            <span className="block text-xs text-muted-foreground italic leading-relaxed">
              Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
            </span>
          </div>

          <Separator />

          <Button type="submit" className="w-full">
            Executar
            <Wand2 className="w-4 h-4 ml-2" />
          </Button>
         </form>
        </aside>
      </main>

    </div>
  )
}
