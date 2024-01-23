import { FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import './style.scss'


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
    const [height, setHeight] = useState([0])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='main-container'>
            <div
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                onClick={() => height.includes(0) ? setHeight(height.filter(item => item !== 0)) : setHeight([...height, 0])}>
                <h1>Informações Pessoais</h1>
                {
                    height.includes(0) ?
                        <ArrowUpIcon color={'#0000006d'} boxSize={6} />
                        :
                        <ArrowDownIcon color={'#0000006d'} boxSize={6} />
                }
            </div>
            <div style={{ overflowY: 'scroll', height: height.includes(0) ? '280px' : "0%", overflow: 'hidden', transition: '0.5s ease-in-out' }}>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Nome Completo</FormLabel>
                    <Input type='text' {...register('name')} />
                    {errors.name && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.name.message}</span>}
                </FormControl>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Endereço de e-mail</FormLabel>
                    <Input type='email' {...register('email')} />
                    {errors.email && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.email.message}</span>}
                </FormControl>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Número de telefone</FormLabel>
                    <Input type='number' {...register('number')} />
                    {errors.number && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.number.message}</span>}
                </FormControl>
            </div>
            <div
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                onClick={() => height.includes(1) ? setHeight(height.filter(item => item !== 1)) : setHeight([...height, 1])}
            >
                <h1>Detalhes Profissionais</h1>
                {
                    height.includes(1) ?
                        <ArrowUpIcon color={'#0000006d'} boxSize={6} />
                        :
                        <ArrowDownIcon color={'#0000006d'} boxSize={6} />
                }
            </div>
            <div style={{ overflowY: 'scroll', height: height.includes(1) ? '190px' : "0%", overflow: 'hidden', transition: '0.5s ease-in-out' }}>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Empresa ou instituição</FormLabel>
                    <Input type='text' {...register('company')} />
                    {errors.company && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.company.message}</span>}
                </FormControl>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Cargo ou função</FormLabel>
                    <Select placeholder='selecione sua função' {...register('function')}>
                        <option>Desenvolvedor Front-end</option>
                        <option>Desenvolvedor Back-end</option>
                        <option>UI Design</option>
                        <option>UX Design</option>
                        <option>UI/UX Design</option>
                    </Select>
                    {errors.function && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.function.message}</span>}
                </FormControl>
            </div>
            <div
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                onClick={() => height.includes(2) ? setHeight(height.filter(item => item !== 2)) : setHeight([...height, 2])}
            >
                <h1>Preferências de Participação</h1>
                {
                    height.includes(2) ?
                        <ArrowUpIcon color={'#0000006d'} boxSize={6} />
                        :
                        <ArrowDownIcon color={'#0000006d'} boxSize={6} />
                }
            </div>
            <div style={{ overflowY: 'scroll', height: height.includes(2) ? '190px' : "0%", overflow: 'hidden', transition: '0.5s ease-in-out' }}>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Modalidade</FormLabel>
                    <Select placeholder='selecione sua função' {...register('modality')}>
                        <option>Palestra</option>
                        <option>Workshop</option>
                        <option>Ambos</option>
                    </Select>
                    {errors.modality && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.modality.message}</span>}
                </FormControl>
                <FormControl style={{ marginBottom: "20px" }}>
                    <FormLabel>Áreas de interesse</FormLabel>
                    <Select placeholder='selecione sua função' {...register('interest')}>
                        <option>Tecnologia</option>
                        <option>Negócios</option>
                        <option>Design</option>
                    </Select>
                    {errors.interest && <span style={{ color: '#0000006d', fontSize: '1rem' }}>{errors.interest.message}</span>}
                </FormControl>
            </div>
            <Button colorScheme='teal' type='submit' variant='outline'>
                Salvar
            </Button>
        </form>
    );
};
