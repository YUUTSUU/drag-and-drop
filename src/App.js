import {APIDataTable} from './component/APIDataTable'

const columns = [
  {label: 'Способ доставки', width: 149, filterType: 'select', filterKey: 'delivery_methods'},
  {label: 'Пункт', width: 160},
  {label: 'Контроль', width: 160, filterType: 'select-code', filterKey: 'control_status'},
  {label: 'Ожидает ответа', width: 160},
  {label: 'Организация', width: 160},
  {label: 'Входящий номер', width: 149, filterType: 'text', filterKey: 'incoming_number'},
  {label: 'Дата регистрации', width: 155, filterType: 'date-period', datePeriodFilterFirstKey: 'register_date_ext_inc_from'},
  {label: 'Наименование организации', width: 300, filterType: 'select', filterKey: 'organization_id'},
  {label: 'Автор', width: 200, filterType: 'text', filterKey: 'external_incoming_sender'},
  {label: 'Исходящий номер', width: 160, filterType: 'text', filterKey: 'out_number'},
  {label: 'Исходящая дата', width: 150, filterType: 'date-period', datePeriodFilterFirstKey: 'out_date_from'},
  {label: 'Вид документа', width: 200, filterType: 'select', filterKey: 'document_kinds'},
  {label: 'Краткое содержание', width: 400, filterType: 'text', filterKey: 'description'},
  {label: 'Статус документа', width: 160, filterType: 'select-code', filterKey: 'status'},
  {label: 'Дата исполнения', width: 150, filterType: 'date-period', datePeriodFilterFirstKey: 'execution_date_from'},
  {label: 'Исполнитель', width: 215, filterType: 'text', filterKey: 'executor'},
  {label: 'Должность, структурное подразделение', width: 320, filterType: 'text', filterKey: 'executor'},
  {label: 'Является ответом на внешн. вх.', width: 250}
]

function App() {
  return (
    <>
      <APIDataTable columns={columns} />
    </>
  );
}

export default App