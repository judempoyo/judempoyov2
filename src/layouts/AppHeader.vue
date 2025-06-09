
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {});
</script>

<template>
    <div>
        <div class="border-b border-sidebar-border/80">
            <div class="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
                <!-- Mobile Menu -->
                <div class="lg:hidden">
                    <Sheet>
                        <SheetTrigger :as-child="true">
                            <Button variant="ghost" size="icon" class="mr-2 h-9 w-9">
                                <Menu class="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" class="w-[300px] p-6">
                            <SheetTitle class="sr-only">Navigation Menu</SheetTitle>
                            <SheetHeader class="flex justify-start text-left">
                                <AppLogoIcon class="size-6 fill-current text-black dark:text-white" />
                            </SheetHeader>
                           
                        </SheetContent>
                    </Sheet>
                </div>

               

                <!-- Desktop Menu -->
                <div class="hidden h-full lg:flex lg:flex-1">
                   lorem
                </div>

                <div class="ml-auto flex items-center space-x-2">
                    <div class="relative flex items-center space-x-1">
                        <Button variant="ghost" size="icon" class="group h-9 w-9 cursor-pointer">
                            <Search class="size-5 opacity-80 group-hover:opacity-100" />
                        </Button>

                        
                    </div>

                   
                </div>
            </div>
        </div>

       
    </div>
</template>

<style lang="css" scoped>
</style>
