export { Table } from "./Table";
export { TableHeading } from "./TableHeading";
export { TableBody } from "./TableBody";
export { TableRow } from "./TableRow";
export { TableColumn } from "./TableColumn";
// import { ButtonComponent } from '@/components/ui/ButtonComponent';


/**
    * Example usage:
    'use client';
import { Table, TableBody, TableColumn, TableHeading, TableRow } from '@/components/table';
import Modal from '@/components/ui/modal';
import { Edit, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ButtonComponent } from '@/components/ui/ButtonComponent';
import { SearchInput } from '@/components/form/search-input';
import { Pagination } from '@/components/ui/pagination';
import CreateModal from './CreateModal';
import EditModal from './EditModal';
import {  DataShape } from './Layout';

const formatDate = (iso: string) => {
    try {
        return new Date(iso).toLocaleDateString();
    } catch {
        return iso;
    }
};

const ITEMS_PER_PAGE = 10;


import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useCreateAdminDepartment, useDeleteAdminDepartment, useUpdateAdminDepartment } from '@/hooks/admin/setting/department/department.admin.hook';


const TableComponent = ({ res }: { res: DataShape }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editInitialValues, setEditInitialValues] = useState<any | null>(null);

    // Search and pagination state
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const initialSearch = String(searchParams.get('searchTerm') ?? '');
    const initialPage = Number(searchParams.get('page') ?? '1');
    const initialLimit = Number(res?.meta?.limit ?? ITEMS_PER_PAGE);
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [limit] = useState(initialLimit);

    // Sync search/page to URL
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(currentPage));
        if (searchTerm) {
            params.set('searchTerm', searchTerm);
        } else {
            params.delete('searchTerm');
        }
        router.replace(`${pathname}?${params.toString()}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, currentPage]);

    // Filter and paginate data client-side if no server meta
    const raw = Array.isArray(res?.data) ? res.data : [];
    const filtered = searchTerm
        ? raw.filter((item: any) =>
            (item.name?.toLowerCase() ?? '').includes(searchTerm.toLowerCase()) 
        )
        : raw;
    const serverMeta = res?.meta;
    const serverMode = Boolean(serverMeta && typeof serverMeta.total === 'number');
    const totalItems = serverMode ? (serverMeta?.total ?? filtered.length) : filtered.length;
    const effectiveLimit = serverMode ? (serverMeta?.limit ?? limit) : limit;
    const totalPages = Math.max(1, Math.ceil(totalItems / (effectiveLimit || ITEMS_PER_PAGE)));
    const pageItems = serverMode
        ? filtered
        : filtered.slice((currentPage - 1) * effectiveLimit, currentPage * effectiveLimit);

    const deleteAdminDepartmentDeleteMutation = useDeleteAdminDepartment();
    const createAdminDepartmentMutation = useCreateAdminDepartment();
    const updateAdminDepartmentMutation = useUpdateAdminDepartment();

    // Handler for create
    const handleCreateDepartment = (values: any) => {
        createAdminDepartmentMutation.mutate(values, {
            onSuccess: () => {
                setIsCreateModalOpen(false);
            },
        });
    };

    // Handler for edit
    const handleEditDepartment = (values: any) => {
        const formData = {
            id: editInitialValues?.id,
            data: values
        }
        if (!editInitialValues?.id) return;
        updateAdminDepartmentMutation.mutate(formData, {
            onSuccess: () => {
                setIsEditModalOpen(false);
                setEditInitialValues(null);
            },
        });
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Departments</h3>
                <div className='flex justify-between items-center'>
                    <SearchInput value={searchTerm} onChange={v => { setSearchTerm(v); setCurrentPage(1); }} placeholder="Search by Department " />
                    <ButtonComponent onClick={() => setIsCreateModalOpen(true)}>
                        <Plus className="w-4 h-4" /> Add Department
                    </ButtonComponent>
                </div>
            </div>
            <Table className="">
                <TableHeading className="bg-secondary text-base-400">
                    <TableColumn isHeader align="left">Name</TableColumn>
                    <TableColumn isHeader align="center">CreatedAt</TableColumn>
                    <TableColumn isHeader align="center">Action</TableColumn>
                </TableHeading>
                <TableBody isEmpty={pageItems.length === 0} emptyMessage="No departments found">
                    {pageItems.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableColumn align="center">{item.name}</TableColumn>
                            <TableColumn align="center">{formatDate(item.createdAt)}</TableColumn>
                            <TableColumn align="center" className="flex items-center justify-center gap-3">
                                <button
                                    aria-label="edit"
                                    className="text-blue-600 p-1 cursor-pointer"
                                    onClick={() => {
                                        setEditInitialValues(item);
                                        setIsEditModalOpen(true);
                                    }}
                                >
                                    <Edit className="w-4 h-4" />
                                </button>
                                <button aria-label="delete" onClick={() => {
                                    const id = String((item as Record<string, unknown>).id ?? (item as Record<string, unknown>).customerId ?? "");
                                    if (!id) return;
                                    setDeleteTargetId(id);
                                    setIsDeleteModalOpen(true);
                                }} className="text-red-500 p-1 cursor-pointer">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </TableColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
     
         
          
          
        </>
    );
}

export default TableComponent

*/
