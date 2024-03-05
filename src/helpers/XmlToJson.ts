import { MemoryStorageFile } from '@blazity/nest-file-fastify';
import { XMLParser } from 'fast-xml-parser';

// Convert a MemoryStorageFile thats a XML to JSON
// MemoryStorageFile is a type from the @blazity/nest-file-fastify package
// so this function is a helper to convert a XML file to JSON.
export function xmlMemoryStorageFileToJSON(
  xmlMemoryStorageFile: MemoryStorageFile,
): JSON {
  // Get the XML string from the MemoryStorageFile
  const invoiceRawXmlString = xmlMemoryStorageFile.buffer.toString();

  // Options to parse the XML to JSON
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: '',
  };

  // Parse the XML to JSON
  const xmlParser = new XMLParser(options);
  const invoiceRawJson: JSON = xmlParser.parse(invoiceRawXmlString);

  return invoiceRawJson;
}
