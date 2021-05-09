import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

type CodeSampleReturn = { 
    get: () => void;
    set: () => void;
}

interface CodeSample {
    HttpVerb: CodeSampleReturn;
    Path: CodeSampleReturn;
    Language: CodeSampleReturn;
    SampleString: CodeSampleReturn;
}

class Program {
    _outputDirectory: string;
    _specDirectory: string;
    _yamlOutputFile: string;
    _jsonOutputFile: string;
    _codeSamples: CodeSample[];
    httpVerbs: string[];

    constructor() {
        this._outputDirectory = "output";
        this._specDirectory = "spec";
        this._yamlOutputFile = "api/swagger.yaml";
        this._jsonOutputFile = "api/swagger.json";
        this._codeSamples = [];
        this.httpVerbs = ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
    }

    Main(args: string[]): void {
        try {
            this.RefreshOutputDirectory();

            // start building up the yaml file
            fs.readFile("{_specDirectory}/swagger.yaml", (err, _) => {
                if(err) throw err;
            });

            fs.createWriteStream(this._yamlOutputFile);
            //     {
            //         while ((s = sr.ReadLine()) != null)
            //         {
            //             writer.WriteLine(s);
            //         }
                
            // }

            // append paths and components to yaml file
            this.AddPaths();
            this.AddAllComponents();

            // use openapi.net to read yaml file
            var str = fs.readFile(this._yamlOutputFile, (err, _) => {
                if(err) throw err;
            });

            var inputfile = 'input.yml',
            outputfile = 'output.json',

            obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
            // this code if you want to save
            fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
        }
        
        catch (e) {
            process.stdout.write(e);
            throw e;
        }
    }

    RefreshOutputDirectory(): void {
        this.ClearOutputDirectory();
        fs.mkdir(this._outputDirectory, () => {});
    }

    ClearOutputDirectory(): void {
        if (fs.existsSync(this._outputDirectory)) {
            fs.readdir(this._outputDirectory, (err, files) => {
                if (err) throw err;
              
                for (const file of files) {
                  fs.unlink(path.join(this._outputDirectory, file), err => {
                    if (err) throw err;
                  });
                }
              });
            fs.rmdirSync(this._outputDirectory);
        }
    }

    AddPaths(): void {

    }
    
    AddAllComponents(): void {
        fs.appendFileSync(this._yamlOutputFile, "components:\n");
        const list = ["schemas", "headers", "parameters", "responses", "securitySchemes"];

        list.forEach(item => this.AddComponent(item))
    }

    AddComponent(item: string): void {
        if (fs.existsSync(`${this._specDirectory}/components/${item}`)) {
            return;
        }
        var yamlSchemaFiles = this.GetSpecFiles(`/components/${item}/`, "*.yaml");
            var text = `  ${item}:\n`;
            text += this.GetComponentsText(yamlSchemaFiles);
            fs.appendFileSync(this._yamlOutputFile, text);
    }

    GetComponentsText(input: string[]): string {
        return '';
    }

    GetCodeSampleText(path: string, verb: string): string  {
        return '';
    }

    GetCodeSample(path: string, verb: string): CodeSample[] {
        return this._codeSamples.filter(x => 
            String(x.Path).toLowerCase() === path.toLowerCase() && 
            String(x.HttpVerb).toLowerCase() === verb.toLowerCase());
    }

    LoadCodeSamples(): void {
        const codeSampleFiles = this.GetSpecFiles("code_samples", "*.*");

        codeSampleFiles.forEach(file => {
            if(file.toLowerCase() !== 'readme') {
                
            }
        })
    }

    GetSpecFiles(path: string, extension: string): string[] { 
        return [''];
    }
 

}


module.exports = Program;
