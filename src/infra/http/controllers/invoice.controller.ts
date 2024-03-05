import {
  BadRequestException,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { Post } from '@nestjs/common';
import { SendInvoices } from 'src/application/use-cases/send-invoices';
import { FindAllInvoices } from 'src/application/use-cases/findAll-invoices';

import {
  AnyFilesInterceptor,
  MemoryStorageFile,
  UploadedFiles,
} from '@blazity/nest-file-fastify';
import { xmlMemoryStorageFileToJSON } from 'src/helpers/XmlToJson';
import { InvoiceViewModel } from '../view-models/invoice-view-model';

@Controller('invoices')
export class InvoiceController {
  constructor(
    private sendInvoices: SendInvoices,
    private findAllInvoices: FindAllInvoices,
  ) {}

  @Post('/upload')
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @UploadedFiles()
    files: MemoryStorageFile[],
  ) {
    const invoiceRawJson: JSON[] = [];

    if (files.length === 0) {
      throw new BadRequestException('No files uploaded');
    }

    for (const file of files) {
      invoiceRawJson.push(xmlMemoryStorageFileToJSON(file));
    }

    try {
      const { invoiceArray } = await this.sendInvoices.execute({
        invoiceRawJsonArray: invoiceRawJson,
      });

      return { invoices: InvoiceViewModel.toManyHttp(invoiceArray) };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async getAll() {
    const invoiceArray = await this.findAllInvoices.execute();

    return { invoices: InvoiceViewModel.toManyHttp(invoiceArray) };
  }
}
