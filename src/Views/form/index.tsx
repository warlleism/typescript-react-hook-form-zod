import { FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: 'Nome é obrigatório' }).max(255, { message: 'Nome deve ter no máximo 255 caracteres' }),
    email: z.string().email({ message: 'E-mail inválido' }),
    number: z.string()
        .refine(data => /^\d{9,15}$/.test(data), { message: 'Número de telefone inválido' })
        .transform(data => parseInt(data, 10)),
    company: z.string().min(1, { message: 'Empresa é obrigatória' }).max(255, { message: 'Empresa deve ter no máximo 255 caracteres' }),
    function: z.string().min(1, { message: 'Cargo é obrigatório' }).max(255, { message: 'Cargo deve ter no máximo 255 caracteres' }),
    modality: z.string().min(1, { message: 'Modalidade é obrigatória' }).max(255, { message: 'Modalidade deve ter no máximo 255 caracteres' }),
    interest: z.string().min(1, { message: 'Área de interesse é obrigatória' }).max(255, { message: 'Área de interesse deve ter no máximo 255 caracteres' }),
});

type Inputs = z.infer<typeof schema>;

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: Inputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Informações Pessoais</h1>
            <FormControl>
                <FormLabel>Nome Completo</FormLabel>
                <Input type='text' {...register('name')} />
                {errors.name && <span>{errors.name.message}</span>}
            </FormControl>
            <FormControl>
                <FormLabel>Endereço de e-mail</FormLabel>
                <Input type='email' {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
            </FormControl>
            <FormControl>
                <FormLabel>Número de telefone</FormLabel>
                <Input type='number' {...register('number')} />
                {errors.number && <span>{errors.number.message}</span>}
            </FormControl>
            <h1>Detalhes Profissionais</h1>
            <FormControl>
                <FormLabel>Empresa ou instituição</FormLabel>
                <Input type='text' {...register('company')} />
                {errors.company && <span>{errors.company.message}</span>}
            </FormControl>
            <FormControl>
                <FormLabel>Cargo ou função</FormLabel>
                <Select placeholder='selecione sua função' {...register('function')}>
                    <option>Desenvolvedor Front-end</option>
                    <option>Desenvolvedor Back-end</option>
                    <option>UI Design</option>
                    <option>UX Design</option>
                    <option>UI/UX Design</option>
                </Select>
                {errors.function && <span>{errors.function.message}</span>}
            </FormControl>
            <h1>Preferências de Participação</h1>
            <FormControl>
                <FormLabel>Modalidade</FormLabel>
                <Select placeholder='selecione sua função' {...register('modality')}>
                    <option>Palestra</option>
                    <option>Workshop</option>
                    <option>Ambos</option>
                </Select>
                {errors.modality && <span>{errors.modality.message}</span>}
            </FormControl>
            <FormControl>
                <FormLabel>Áreas de interesse</FormLabel>
                <Select placeholder='selecione sua função' {...register('interest')}>
                    <option>Tecnologia</option>
                    <option>Negócios</option>
                    <option>Design</option>
                </Select>
                {errors.interest && <span>{errors.interest.message}</span>}
            </FormControl>
            <Button colorScheme='teal' type='submit' variant='outline'>
                Salvar
            </Button>
        </form>
    );
};
