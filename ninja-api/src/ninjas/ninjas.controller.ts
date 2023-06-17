import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.ninjasService.getNinja(id);
        } catch (err) {
            throw new NotFoundException();
        }
 
    }

    @Post()
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinjas(+id, updateNinjaDto);
    }
    
    @Delete(':id')
    deleteNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjasService.removeNinja(id);
    }
}
