'use client'

import { FilterDesktop } from './filter-desktop'
import { FilterMobile } from './filter-mobile'
import { FilterTabs } from './filter-tabs'
import { useFilterState } from './hooks'

export const Filter = () => {
  const {
    isOpen,
    setIsOpen,
    selectedAnimalType,
    selectedSido,
    selectedSigungu,
    selectedBreed,
    startDate,
    endDate,
    sidoList,
    sigunguList,
    breedList,
    activeFilterCount,
    handleAnimalTypeChange,
    handleSidoChange,
    handleSigunguChange,
    handleBreedChange,
    handleStartDateChange,
    handleEndDateChange,
    handleReset
  } = useFilterState()

  return (
    <div className='sticky top-[60px] z-40 mb-6 space-y-4 bg-white pb-4 pt-4 lg:top-[70px]'>
      {/* 동물 종류 탭 */}
      <FilterTabs
        selectedAnimalType={selectedAnimalType}
        onAnimalTypeChange={handleAnimalTypeChange}
      />

      {/* 모바일 필터 */}
      <FilterMobile
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        activeFilterCount={activeFilterCount}
        selectedSido={selectedSido}
        selectedSigungu={selectedSigungu}
        selectedBreed={selectedBreed}
        selectedAnimalType={selectedAnimalType}
        startDate={startDate}
        endDate={endDate}
        sidoList={sidoList}
        sigunguList={sigunguList}
        breedList={breedList}
        onSidoChange={handleSidoChange}
        onSigunguChange={handleSigunguChange}
        onBreedChange={handleBreedChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onReset={handleReset}
      />

      {/* 데스크톱 필터 */}
      <FilterDesktop
        selectedSido={selectedSido}
        selectedSigungu={selectedSigungu}
        selectedBreed={selectedBreed}
        selectedAnimalType={selectedAnimalType}
        startDate={startDate}
        endDate={endDate}
        sidoList={sidoList}
        sigunguList={sigunguList}
        breedList={breedList}
        onSidoChange={handleSidoChange}
        onSigunguChange={handleSigunguChange}
        onBreedChange={handleBreedChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        onReset={handleReset}
      />
    </div>
  )
}
