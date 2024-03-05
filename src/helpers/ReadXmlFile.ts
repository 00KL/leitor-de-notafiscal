import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs';
import * as path from 'path';

export function ReadXmlFile(xmlFilePathString: string) {
  const xmlCompleteFilePathString = path.join(process.cwd(), xmlFilePathString);
  const xmlFileString = fs
    .readFileSync(xmlCompleteFilePathString, 'utf-8')
    .toString();

  // Options to parse the XML to JSON
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: '',
  };

  // Parse the XML to JSON
  const xmlParser = new XMLParser(options);
  const rawJson: JSON = xmlParser.parse(xmlFileString);
  return rawJson;
}
